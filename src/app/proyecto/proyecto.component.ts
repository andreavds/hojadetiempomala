import { Component } from '@angular/core';
import { ProyectoService, Proyecto } from './proyecto.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyectos: Proyecto[] = [];
  codigoProyecto = '';
  descripcionProyecto = '';
  mostrarFormulario = false;

  constructor(private proyectoService: ProyectoService) {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.proyectoService.getAllProyectos().then((proyectos) => {
      this.proyectos = proyectos;
    });
  }

  nuevoProyecto(): void {
    this.mostrarFormulario = true;
    this.descripcionProyecto = '';
  }

  editarProyecto(codigo: string): void {
    this.codigoProyecto = codigo;
    this.mostrarFormulario = true;
    const proyecto = this.proyectos.find((p) => p.codigo === codigo);
    if (proyecto) {
      this.descripcionProyecto = proyecto.descripcion;
    }
  }

  confirmarAccion(): void {
    if (this.codigoProyecto && this.descripcionProyecto) {
      if (this.mostrarFormulario) {
        this.proyectoService
          .agregarProyecto({ codigo: this.codigoProyecto, descripcion: this.descripcionProyecto })
          .then(() => {
            this.cargarProyectos();
            this.mostrarFormulario = false;
          });
      } else {
        this.proyectoService
          .actualizarProyecto({ codigo: this.codigoProyecto, descripcion: this.descripcionProyecto })
          .then(() => {
            this.cargarProyectos();
            this.mostrarFormulario = false;
          });
      }
    }
  }

  eliminarProyecto(codigo: string): void {
    this.proyectoService.eliminarProyecto(codigo).then(() => {
      this.cargarProyectos();
    });
  }
}
