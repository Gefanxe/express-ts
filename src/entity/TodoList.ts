import { BaseEntity, Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo_list", { schema: "testdb" })
export class TodoList extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "sid" })
    sid: number;

    @Column("varchar", { name: "identifyId", length: 50 })
    identifyId: string;

    @Column("bigint", { name: "id" })
    id: string;

    @Column("varchar", { name: "value", length: 50 })
    value: string;

    @Column("boolean", { name: "completed", nullable: true })
    completed: boolean | null;

    @DeleteDateColumn()
    deletedDate: Date;
}
