# Product Explorer - PC1

Web application developed for DummyJSON to explore and consult catalog products.

## Author
- **Developer**: Benjamin Solorzano Sullca
- **Student Code**: u202422816
- **Course**: Desarrollo de Aplicaciones Open Source (1ASI0729)
- **NRC**: 7747

## Architecture & Design Patterns
- **Architecture**: Domain-Driven Design (DDD) layered architecture with `shared` and `digital-assets` sub-domains.
- **Design Patterns**:
  - **Entity**: `Product`
  - **State Management**: Reactive store using Angular Signals (`ProductStore`)
  - **Request / Response**: `ProductSearchResponse` & `ProductResource`
  - **Assembler**: `ProductAssembler`
- **Internationalization (i18n)**: English (default) and Spanish support via `@ngx-translate`.
- **UI Framework**: Angular Material with responsive grid layout (3 cards per row).
- **Accessibility**: ARIA labels, semantic landmark elements, and alternative image texts.

## Prerequisites
- Node.js (v20+ recommended)
- Angular CLI (v22+)

## Execution
```bash
npm install
ng serve
