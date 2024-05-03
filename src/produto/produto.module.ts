import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { ProdutoService } from "./service/produto.service";
import { ProdutoController } from "./controller/produto.controller";

@Module({
        imports: [TypeOrmModule.forFeature([Produto])],
        providers: [ProdutoService],
        controllers: [ProdutoController],
        exports: [TypeOrmModule]
    })
export class ProdutoModule{}