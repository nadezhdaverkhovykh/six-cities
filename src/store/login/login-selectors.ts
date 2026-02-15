import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../constants/constants';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.Login].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.Login].authorizationStatus !== AuthorizationStatus.Unknown;
