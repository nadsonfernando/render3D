import { BufferSource } from 'react-native-filament';

export interface ProductEntity {
  id: string;
  name: string;
  glb: BufferSource;
}
