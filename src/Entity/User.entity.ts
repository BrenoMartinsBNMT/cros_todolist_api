import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from './Task.entity';

@Entity({ name: 'todo_user' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  todo: string;
  @Column({ type: 'varchar' })
  @OneToMany(() => TaskEntity, (task) => task.id)
  tasks: string;
}
