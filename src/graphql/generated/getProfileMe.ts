/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfileMe
// ====================================================

export interface getProfileMe_me {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface getProfileMe {
  me: getProfileMe_me | null;
}
