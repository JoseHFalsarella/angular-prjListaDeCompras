import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss']
})
export class ListaDeComprasComponent {
  listForm: FormGroup;
  shoppingList: { name: string; quantity: number; done: boolean; }[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.listForm = this.formBuilder.group({
      writeItem: ['', Validators.required],
      insertQty: ['', [Validators.required, Validators.min(1)]]
    });
  }

  addItem() {
    if (this.listForm.valid) {
      const itemName = this.listForm.get('writeItem')?.value;
      const itemQty = this.listForm.get('insertQty')?.value;
      this.shoppingList.push({ name: itemName, quantity: itemQty, done: false });
      this.listForm.reset();
    } else {
      this.listForm.markAllAsTouched();
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }

  toggleDone(event: any, index: number) {
    const isChecked = event.target.checked;
    this.shoppingList[index].done = isChecked;
  }
}
