import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrl: './lista-de-compras.component.scss'
})
export class ListaDeComprasComponent {
  listForm: FormGroup;
  shoppingList: string[]=[];

  constructor(private formBuilder: FormBuilder) {
    this.listForm = this.formBuilder.group({
      writeItem: ['', Validators.required]
    });
  }

  addItem() {
    if (this.listForm.valid) {
      const itemName = this.listForm.get('writeItem')?.value;
      this.shoppingList.push(itemName);
      this.listForm.reset();
    } else {
      this.listForm.markAllAsTouched();
    }
  }
}
