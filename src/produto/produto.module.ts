import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { ProdutoService } from "./service/produto.service";
import { ProdutoController } from "./controller/produto.controller";
import { CategoriaModule } from "../categoria/categoria.module";
import { CategoriaService } from "../categoria/service/categoria.service";

@Module({
        imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
        providers: [ProdutoService, CategoriaService],
        controllers: [ProdutoController],
        exports: [TypeOrmModule]
    })
export class ProdutoModule{}