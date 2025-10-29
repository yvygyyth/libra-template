# Libra Template

一个简洁的 TypeScript 工具库模板，开箱即用。

## 特性

- ⚡️ **Vite** - 快速的构建工具
- 📦 **TypeScript** - 类型安全
- 🧪 **Vitest** - 单元测试
- 🎨 **Prettier** - 代码格式化
- 🔍 **ESLint** - 代码检查
- 📝 **支持多种构建格式** - ESM, CJS, UMD
- 🔒 **强制使用 pnpm** - 统一包管理器
- 🎯 **环境限制** - Node >= 18.0.0

## 使用方法

### 1. 克隆模板

```bash
git clone <your-repo-url> my-library
cd my-library
```

### 2. 修改项目信息

编辑 `package.json`：

```json
{
  "name": "your-library-name",
  "version": "0.1.0",
  "description": "你的库描述",
  "author": "你的名字",
  ...
}
```

### 3. 安装依赖

本项目强制使用 pnpm 作为包管理器：

```bash
# 如果还没安装 pnpm
npm install -g pnpm

# 安装依赖
pnpm install
```

### 4. 开始开发

查看 `src/utils/` 目录中的示例函数，了解项目结构后，就可以开始编写你自己的工具函数了。

**注意**：示例函数仅用于展示项目结构，你可以根据需要删除或替换它们。

## 命令

```bash
# 开发模式
pnpm dev

# 构建库
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 项目结构

```
.
├── src/                  # 源代码目录
│   ├── utils/           # 工具函数
│   └── index.ts         # 入口文件
├── tests/               # 测试文件目录
├── dist/                # 构建输出目录
├── .eslintrc.cjs        # ESLint 配置
├── .prettierrc          # Prettier 配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── package.json         # 项目配置
```

## 构建输出

构建后会生成以下文件：

- `dist/index.js` - CommonJS 格式
- `dist/index.esm.js` - ES Module 格式
- `dist/index.umd.js` - UMD 格式
- `dist/index.d.ts` - TypeScript 类型声明文件

## 环境要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **npm**: >= 9.0.0

项目配置了 `.nvmrc` 文件，推荐使用 nvm 管理 Node.js 版本。

## 发布到 npm

```bash
# 1. 登录 npm
npm login

# 2. 发布
pnpm publish
```

## License

MIT

