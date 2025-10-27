import { FindUserByNameUseCase } from '@app/modules/user/useCases/find-by-name/findByName';
import { UserRepository } from '@app/modules/user/infrastructure/implementations/repository';

const userRepository = new UserRepository();
const findUserByNameUseCase = new FindUserByNameUseCase(userRepository);

export { findUserByNameUseCase };
