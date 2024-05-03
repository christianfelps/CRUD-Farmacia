import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaService } from './categoria/service/categoria.service';
import { CategoriaController } from './categoria/controller/categoria.controller';
import { ProdutoController } from './produto/controller/produto.controller';
import { ProdutoService } from './produto/service/produto.service';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [Categoria, Produto],
      synchronize: true

    }),
    CategoriaModule,
    ProdutoModule
  ],
  controllers: [CategoriaController, ProdutoController],
  providers: [CategoriaService, ProdutoService],
})
export class AppModule {}
