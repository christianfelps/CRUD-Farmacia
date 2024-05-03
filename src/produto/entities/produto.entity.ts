import {  IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: 'tb_produtos'})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty() 
    @Column("decimal", {precision: 6, scale: 2, nullable: false})
    preco: number


@ManyToOne(() => Categoria, (categoria) => categoria.produto, {
   onDelete: "CASCADE"
 })
categoria: Categoria;
 
}
