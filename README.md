## Deployment architecture with infrastructure set up beforehand through terraform.

```console
+----------------------+    (push)    +-------------+                 
|     remote repo      |--------------|   github    |                 
+----------------------+              +------|------+                 
                                             |                        
                                             |                        
                         deploy.yml action   |                        
                    +------------------------|-----------------------+
                    |+-----------------+                             |
                    ||  (changes in)   |                             |
                    ||  	             |       +-----------------+   |
                    ||   src/**        |-------| npm run build   |   |
                    ||   public/**     |       +-----------------+   |
                    |+-----------------+                             |
                    |                                                |
                    |    +-------------------------------------+     |
                    |    |                                     |     |
                    |    |      sync with AWS S3 Bucket        |     |
                    |    |                                     |     |
                    |    +------------------|------------------+     |
                    |                       |                        |
                    |    +------------------|------------------+     |
                    |    |                                     |     |
                    |    | create AWS Cloudfront Invalidaiton  |     |
                    |    | to clear cache                      |     |
                    |    +-------------------------------------+     |
                    |                                                |
                    +------------------------------------------------+
```
