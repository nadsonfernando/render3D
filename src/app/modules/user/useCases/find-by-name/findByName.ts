import { UserRepository } from '@app/modules/user/infrastructure/implementations/repository';
import { UserEntity } from '@app/modules/user/domain/entities/user';

type FindUserByNameUseCaseReturnType = {
  data?: UserEntity;
  error?: string;
};

export class FindUserByNameUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string): Promise<FindUserByNameUseCaseReturnType> {
    const response = await this.userRepository.find(name);

    if (!response.data || response.error) {
      return {
        error: 'Could not get the user data',
      };
    }

    return { data: response.data };
  }
}
