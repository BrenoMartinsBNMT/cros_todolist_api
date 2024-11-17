import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User.entity';

@Entity({ name: 'todo_tasks' })
export class TodoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @Column({ type: 'varchar', length: 255 })
  task: string;

  @Column({ type: 'boolean' })
  isFirstTask: boolean;

  @Column({ type: 'boolean' })
  done: boolean;

  @Column({ type: 'varchar', length: 255 })
  subTask: string;
}
