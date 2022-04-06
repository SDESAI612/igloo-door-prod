import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_ZX3ooVKzP",
  ClientId: "62q4njjoi7gshh5obvu9bdk92h",
};

export default new CognitoUserPool(poolData);
