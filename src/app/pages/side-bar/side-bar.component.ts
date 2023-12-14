import { Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  changeVideo(value: string) {
    if (value == '1. Bạn sẽ làm được gì sau khóa học?') {
      console.log('true');

    }
  }
}


const TREE_DATA: FoodNode[] = [
  {
    name: '1.Bắt đầu',
    children: [
      { name: '1. Bạn sẽ làm được gì sau khóa học?' },
      { name: '2. Tìm hiểu về nguyên âm' },
      { name: '3. Tìm hiểu về phụ âm' }],
  },
  {
    name: '2.Làm quen với bảng chử cái',
    children: [
      {
        name: '1.Chữ A',
      },
      {
        name: '2.Chữ B',
      },
      {
        name: '3.Chữ C',
      },
      {
        name: '4.Chữ D',
      },
      {
        name: '5.Chữ E',
      },
      {
        name: '6.Chữ F',
      },
      {
        name: '7.Chữ G',
      },
      {
        name: '8.Chữ H',
      }
    ],
  },
];


