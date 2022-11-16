<link rel="stylesheet" href="/index.css">

[[← go back](/wiki)]


# Sourcehut to GitHub Mirror
Below is a build file to mirror any repository to a matching GitHub repository.

```yml
image: ubuntu/20.04
sources:
    - https://git.sr.ht/~username/repository
secrets:
    - big-long-uuid # this is your public SSH key, add it to GitHub at https://github.com/settings/keys and Sourcehut at https://builds.sr.ht/secrets
tasks:
    - mirror-to-github: |
        cd com
        git remote add github git@github.com:username/repository.git
        ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
        git push github main
```