import { Controller, Get, Post, Body } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from './persona.entity';

@Controller('personas')
export class PersonasController {
    constructor(private readonly personasService: PersonasService) { }

    @Post()
    async create(@Body() personaData: Partial<Persona>): Promise<Persona> {
        return this.personasService.create(personaData);
    }

    @Get()
    async findAll(): Promise<Persona[]> {
        return this.personasService.findAll();
    }
}