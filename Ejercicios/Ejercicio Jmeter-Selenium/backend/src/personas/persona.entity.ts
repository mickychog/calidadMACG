import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 20 }) 
    carnet: string;

    @Column({ length: 100 })
    nombres: string;

    @Column({ length: 100 })
    apellidos: string;

    @Column({ length: 1 }) // M, F, O
    sexo: string;

    @Column({ type: 'date' })
    fechaNacimiento: Date;

    @Column({ length: 100 })
    profesion: string;

    @Column({ length: 20 })
    celular: string;

    @Column({ type: 'text' }) 
    direccion: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaRegistro: Date;
}