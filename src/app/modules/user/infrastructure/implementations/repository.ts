import { IProducts } from '@app/modules/product/domain/models/products';
import { IUserRepository } from '@app/modules/user/domain/specifications/repository';
import { UserEntity } from '@app/modules/user/domain/entities/user';

import GithubService from '@shared/services/github';

import { IHttpResponse } from '@core/providers/http/types/response';

export class UserRepository implements IUserRepository {
  async find(name: string): Promise<IHttpResponse<UserEntity, undefined>> {
    return GithubService.get<UserEntity>(`/${name}`, {});
  }
}
