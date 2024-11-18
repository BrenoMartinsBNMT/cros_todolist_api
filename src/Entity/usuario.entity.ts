import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TarefaEntity } from './tarefa.entity';

@Entity({ name: 'todo_usuario' })
export class UsuarioEntity {
  @Column({ type: 'bigint', primary: true })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  senha: string;

  @OneToMany(() => TarefaEntity, (tarefa) => tarefa.id)
  tarefas: string;
}
