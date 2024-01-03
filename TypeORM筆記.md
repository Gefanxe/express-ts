### 聯集 或 子查詢範例

- 資料表

```ts
// 表一
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("epilepsy_records", { schema: "testdb" })
export class EpilepsyRecords extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "pid", comment: "body_parts id" })
  pid: number;

  @Column("datetime", { name: "started_at" })
  startedAt: Date;

  @Column("datetime", { name: "ended_at" })
  endedAt: Date;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}

// 表二
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("body_parts", { schema: "testdb" })
export class BodyParts extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "part_name", length: 30 })
  partName: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
```

- 查詢範例

```ts
// 用sql語法查詢
const records = await AppDataSource.query(
  "SELECT e.id, b.part_name, e.started_at, e.ended_at FROM epilepsy_records AS e INNER JOIN body_parts AS b ON e.pid = b.id;"
);
console.log("records:", records);

// querybuilder 使用 子查詢
const data = await AppDataSource.createQueryBuilder()
  .select(["id", "pid", "started_at", "ended_at"])
  .addSelect((subQuery) => {
    return subQuery
      .select("part_name")
      .from(BodyParts, "b")
      .where("b.id = rec.pid");
  }, "part_name")
  .from(EpilepsyRecords, "rec")
  .where("started_at >= :started_at")
  .setParameter("started_at", d)
  .getRawMany();
console.log("data:", data);

// querybuilder 使用 join
const ds = await EpilepsyRecords.createQueryBuilder("rec")
  .select([
    "rec.id as id",
    "rec.pid as pid",
    "bps.part_name",
    "rec.started_at",
    "rec.ended_at",
  ])
  .innerJoin(BodyParts, "bps", "rec.pid = bps.id")
  .getRawMany();
console.log("ds:", ds);
```
- 文件 https://typeorm.nodejs.cn/