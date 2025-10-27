import { IHttpResponse } from '@core/providers/http/types/response';
import { UserEntity } from '@app/modules/user/domain/entities/user';

export interface IUserRepository {
  find(name: string): Promise<IHttpResponse<UserEntity, undefined>>;
}
