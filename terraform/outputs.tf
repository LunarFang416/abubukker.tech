output "distribution_id" {
  value = aws_cloudfront_distribution.frontend.id
}

output "nameservers" {
  value = aws_route53_zone.route_zone.name_servers
}