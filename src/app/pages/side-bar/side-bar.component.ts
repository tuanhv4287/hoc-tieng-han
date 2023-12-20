import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { isIdentifier } from '@angular/compiler';
interface ListNode {
  name: string;
  children?: ListNode[];
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnChanges {
  link: string = '';
  @Output() linkVideo: EventEmitter<any> = new EventEmitter();
  @Output() idVideo: EventEmitter<any> = new EventEmitter();
  @Input() item!: string
  treeControl = new NestedTreeControl<ListNode>(node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ListNode) => !!node.children && node.children.length > 0;
  ngOnChanges(changes: SimpleChanges): void {
    this.changeVideo('value')
    console.log(changes);

  }

  changeVideo(value: string) {
    if (value == '1. Bạn sẽ làm được gì sau khóa học?') {
      this.idVideo.emit(0);
      this.linkVideo.emit(value);
    }
    else if (value == '2. Nguyên âm đơn bài 1') {
      this.idVideo.emit(1);
      this.linkVideo.emit(value);
    }
    else if (value == '3. Nguyên âm đơn bài 2') {
      this.idVideo.emit(2);
      this.linkVideo.emit(value);
    }
    else if (value == '4. Nguyên âm đơn bài 3') {
      this.idVideo.emit(3);
      this.linkVideo.emit(value);
    }
    else if (value == '5. Nguyên âm đơn bài 4') {
      this.idVideo.emit(4);
      this.linkVideo.emit(value);
    }
    else if (value == '6. Nguyên âm đơn bài 5') {
      this.idVideo.emit(5);
      this.linkVideo.emit(value);
    }

  }
}

const TREE_DATA: ListNode[] = [
  {
    name: '1.Bắt đầu',
    children: [
      { name: '1. Bạn sẽ làm được gì sau khóa học?' },
      { name: '2. Nguyên âm đơn bài 1' },
      { name: '3. Nguyên âm đơn bài 2' },
      { name: '4. Nguyên âm đơn bài 3' },
      { name: '5. Nguyên âm đơn bài 4' },
      { name: '6. Nguyên âm đơn bài 5' },],
  },
  {
    name: '2.Làm quen với bảng chữ cái',
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


