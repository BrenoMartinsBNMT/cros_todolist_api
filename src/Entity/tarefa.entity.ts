import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity({ name: 'todo_tarefa' })
@Tree('closure-table')
export class TarefaEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => UsuarioEntity, (user) => user.tarefas)
  usuario: UsuarioEntity;

  @Column({ type: 'varchar', length: 100 })
  titulo: string;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @Column({ type: 'boolean' })
  feito: boolean;

  @TreeParent({ onDelete: 'CASCADE' })
  parent: TarefaEntity;

  @TreeChildren()
  subTarefa: TarefaEntity[];
}
