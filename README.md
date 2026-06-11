# bakehouse project

1. Navigate to ```bakehouse-app/```.
2. In your CLI, run ```echo "export BAKEHOUSE_STACK_NAME=<your name>-bakehouse" >> ~/.bashrc```, replacing ```<your name>``` with your full name to avoid naming conflicts.
3. Install dependencies via ```./install.sh```.
4. Run ```aws sso configure```.
5. Run ```aws sso login --profile student```.
6. Check: ```aws sts get-caller-identity --profile student```
7. Synthesise the stack: ```npx cdk synth```.
8. Deploy the stack: ```npx cdk deploy```.
