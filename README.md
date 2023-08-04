# action-deploy2cos
> A composite steps for deploy frontend filesto cos.

## usage
1. set secret `gh secret set -f ~/.aliyun/.env.kubebio`
2. use below workflow
```yml
name: deploy2cos workflow
on:
  push:
    branches: master

jobs:
  Release:
    name: Release
    runs-on: ubuntu-latest
    env:
      COS_YML: ${{ secrets.COS_YML }}


    if: contains(github.event.head_commit.message, '__@production__')
    steps:
      - name: All in one
        uses: afeiship/action-deploy2cos@master
        with:
          build_dist: "build"
          oss_bucket: cos://your-cos/test/

      - name: Debug
        run: |
          printenv
```