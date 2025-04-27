steps:
  - name: gcr.io/cloud-builders/docker
    args:
      - build
      - '--no-cache'
      - '-t'
      - >-
        $_AR_HOSTNAME/$_AR_PROJECT_ID/$_AR_REPOSITORY/$REPO_NAME:$COMMIT_SHA
      - .
      - '-f'
      - Dockerfile
    id: Build
  - name: gcr.io/cloud-builders/docker
    args:
      - push
      - >-
        $_AR_HOSTNAME/$_AR_PROJECT_ID/$_AR_REPOSITORY/$REPO_NAME:$COMMIT_SHA
    id: Push
images:
  - >-
    $_AR_HOSTNAME/$_AR_PROJECT_ID/$_AR_REPOSITORY/$REPO_NAME:$COMMIT_SHA


options:
  substitutionOption: ALLOW_LOOSE
  logging: CLOUD_LOGGING_ONLY

  
substitutions:
  _AR_PROJECT_ID: level-poetry-395302
  _PLATFORM: managed
  _DEPLOY_REGION: us-central1
  _AR_HOSTNAME: us-central1-docker.pkg.dev
  _AR_REPOSITORY: cloud-run-source-deploy
  _TRIGGER_ID: c58c9935-540f-478a-884f-164fd79a8ac7
