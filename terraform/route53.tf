resource "aws_route53_zone" "route_zone" {
  name = var.domain
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.route_zone.zone_id
  name    = "www.${var.domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.frontend.domain_name
    zone_id                = aws_cloudfront_distribution.frontend.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root" {
  zone_id = aws_route53_zone.route_zone.zone_id
  name    = "${var.domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.frontend.domain_name
    zone_id                = aws_cloudfront_distribution.frontend.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "domain_virginia" {
  provider          = aws.virginia
  domain_name       = var.domain
  subject_alternative_names = ["www.${var.domain}"]
  validation_method = "DNS"
}

resource "aws_route53_record" "cert_validation_virginia" {
  for_each = {
    for dvo in aws_acm_certificate.domain_virginia.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.route_zone.zone_id
}

resource "aws_acm_certificate_validation" "cert_validation_virginia" {
  provider                = aws.virginia
  certificate_arn         = aws_acm_certificate.domain_virginia.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation_virginia : record.fqdn]
}
