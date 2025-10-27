# Plein Air

Aplicação mobile React Native construída com Expo, demonstrando a implementação de **Clean Architecture** com princípios de Domain-Driven Design.

## Arquitetura

Este projeto implementa os conceitos de [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), organizando o código em camadas bem definidas e promove:

- **Independência de Frameworks**: A lógica de negócio não depende de bibliotecas externas
- **Testabilidade**: Regras de negócio podem ser testadas sem UI, banco de dados ou elementos externos
- **Independência de UI**: A interface pode mudar sem alterar o resto do sistema
- **Independência de Banco de Dados**: Regras de negócio não estão acopladas ao banco de dados
- **Independência de Agentes Externos**: Regras de negócio não sabem nada sobre o mundo externo

### Estrutura de Módulos

Cada funcionalidade segue a organização em camadas concêntricas:

```
src/app/modules/{feature}/
├── domain/              # Camada mais interna - Regras de Negócio
│   ├── entities/        # Entidades de negócio
│   ├── models/          # Modelos de dados 
│   └── specifications/  # Interfaces de repositórios (contratos)
│
├── useCases/            # Casos de Uso - Lógica de Aplicação
│   └── {action}/        # Cada caso de uso específico
│       ├── index.ts     # Injeção de dependências
│       └── {action}.ts  # Implementação do caso de uso
│
├── infrastructure/      # Camada Externa - Implementações
│   └── implementations/ # Implementações concretas dos repositórios
│
├── presentation/        # Camada de Interface
│   ├── screens/         # Telas da aplicação
│   ├── components/      # Componentes específicos do módulo
│   └── route/           # Configuração de rotas
│
└── store/               # Gerenciamento de Estado
    └── query/           # React Query hooks
```

## Benefícios da Arquitetura Implementada

### Inversão de Dependências

O projeto demonstra **Injeção de Dependências** através da inversão de controle:

```typescript
// Domain define o contrato (interface)
interface IProductRepository {
  findAll(skip: number, limit: number): Promise<IHttpResponse<IProducts>>;
}

// Use Case depende da abstração, não da implementação
class FindProductsBySkipUseCase {
  constructor(private productRepository: IProductRepository) {}
  // ...
}

// Infrastructure implementa o contrato
class ProductRepository implements IProductRepository {
  async findAll(skip: number, limit: number) {
    return DummyJsonService.get<IProducts>('/products', { params: { limit, skip } });
  }
}

// Injeção da dependência concreta
const productRepository = new ProductRepository();
const findProductsBySkipUseCase = new FindProductsBySkipUseCase(productRepository);
```

**Benefício**: É possível trocar a implementação do repositório (ex: de DummyJSON para outra API) sem alterar os casos de uso ou camada de apresentação.

### Múltiplas Fontes de Dados

Com esses padrões é possível trocar APIs facilmente somente configurando o baseUrl, interceptors...:

- **DummyJSON API** ([dummyjson.com](https://dummyjson.com)) - Para listagem de produtos
- **GitHub API** ([api.github.com](https://api.github.com)) - Para dados de usuário

Cada serviço é uma instância isolada do `HttpProvider` com sua própria configuração base:

```typescript
// src/shared/services/dummyjson/index.ts
export default new HttpProvider({ baseURL: 'https://dummyjson.com' });

// src/shared/services/github/index.ts
export default new HttpProvider({ baseURL: 'https://api.github.com/users' });
```

Ambos usam a mesma interface, permitindo adicionar novas APIs sem modificar a estrutura existente.

## 🔄 Gerenciamento de Estado e Dados

### React Query (TanStack Query)

O projeto utiliza `@tanstack/react-query` para gerenciamento de estado assíncrono, oferecendo:

- Cache automático de requisições
- Revalidação em background
- Otimização de performance
- Gerenciamento de loading e error states

### Infinite Scroll

Implementado através de `useInfiniteQuery` do React Query na listagem de produtos:

```typescript
// src/app/modules/product/store/query/products.ts
export function useProductsStoreQuery() {
  return useInfiniteQuery<IProducts, Error>({
    queryKey: ['products'],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await findProductsBySkipUseCase.execute(pageParam as number);
      return data;
    },
    getNextPageParam: (lastPage: IProducts) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    staleTime: 30 * 1000,
    retry: 1,
  });
}
```

**Benefícios**:
- Carregamento progressivo de dados
- Otimização de performance e uso de memória
- Melhor experiência do usuário em listas longas
- Pull-to-refresh nativo

## 🎨 Sistema de Temas

Suporte automático a tema claro/escuro baseado nas preferências do sistema:

```typescript
// src/theme/index.tsx
export function Theme({ children }: ThemeProps) {
  const scheme = useColorScheme(); // Detecta preferência do sistema

  const theme = useMemo(() => {
    const color = schemes[scheme || 'light'];
    return { color, spacing, typography };
  }, [scheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

Temas definidos em:
- [src/theme/color/schemes/light/index.ts](src/theme/color/schemes/light/index.ts)
- [src/theme/color/schemes/dark/index.ts](src/theme/color/schemes/dark/index.ts)

Com isso é possivel criar novos temas tambem a partir dessa estrutura.
## 🛠️ Tecnologias

- **React Native** 
- **Expo** 
- **TypeScript** 
- **React Navigation** 
- **TanStack Query** 
- **Styled Components** 
- **Axios** 

## 📦 Path Aliases

Configurados em `tsconfig.json` e `babel.config.js`:

- `@app/*` → Módulos de funcionalidades
- `@core/*` → Infraestrutura core (routing, HTTP, query)
- `@theme/*` → Sistema de temas
- `@shared/*` → Componentes e serviços compartilhados

## Executar app

- Instale as dependências:

  ```sh
  npm install
  ```

- Executar

  ```sh
  npm run ios
  # or
  npm run android
  ```
