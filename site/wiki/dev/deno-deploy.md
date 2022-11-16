<link rel="stylesheet" href="/index.css">

[[← go back](/wiki)]


# Sourcehut Deno Deploy Integration
Below is a build file to integrate your project on Sourcehut with [Deno Deploy](https://deno.com/deploy).

```yml
image: ubuntu/20.04
packages:
    - unzip
sources:
    - https://git.sr.ht/~username/repository
secrets:
    - big-long-uuid # this is your deploy key, add it at https://builds.sr.ht/secrets - make sure the file is called "~/.deploy_key"
tasks:
    - install-deno: |
        curl -fsSL https://deno.land/x/install/install.sh | sh
    - install-deployctl: |
        DENO_INSTALL="/home/build/.deno"
        PATH="$DENO_INSTALL/bin:$PATH"
        deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
    - deploy: |
        set +x
        DEPLOY_TOKEN=$(cat ~/.deploy_key)
        set -x
        DENO_INSTALL="/home/build/.deno"
        PATH="$DENO_INSTALL/bin:$PATH"
        deployctl deploy --project=my-project ./repository/main.ts --import-map=./repository/import_map.json --token=$DEPLOY_TOKEN --prod
```