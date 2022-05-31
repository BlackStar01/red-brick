import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, default: null })
  firstName: string;

  @Column({ length: 20, default: null })
  lastName: string;

  @Column({ unique: true, length: 50, default: null })
  email: string;

  @Column({ unique: true, default: null })
  telephone: number;

  @Column({ default: null })
  address: string;

  @Column({ default: null })
  password: string;

  @Column({ default: false })
  isActive: boolean;
}
