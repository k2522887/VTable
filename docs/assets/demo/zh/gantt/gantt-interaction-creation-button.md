---
category: examples
group: gantt
title: 甘特图交互-创建排期
cover: https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/gantt/gantt-task-creation-button.gif
link: '../guide/gantt/introduction'
option: Gantt#taskBar
---

# 甘特图交互-创建排期

该示例展示了甘特图中的数据没有排期时，可通过创建任务条排期

## 关键配置

- `Gantt`
- `Gantt#taskBar.scheduleCreatable` 数据没有排期时，可通过创建任务条排期。默认为 true
- `Gantt#taskBar.scheduleCreation` 配置新建排期按钮的样式

## 代码演示

```javascript livedemo template=vtable
// import * as VTableGantt from '@visactor/vtable-gantt';
let ganttInstance;
const records = [
  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    progress: 31,
    priority: 'P0',
    hierarchyState: 'expand',
    children: [
      {
        id: 2,
        title: 'Project Feature Review',
        developer: 'liufangfang.jane@bytedance.com',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 3,
        title: 'Project Create',
        developer: 'liufangfang.jane@bytedance.com',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 3,
        title: 'Develop feature 1',
        developer: 'liufangfang.jane@bytedance.com',
        progress: 0,
        priority: 'P1'
      }
    ]
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '07/24/2024',
    end: '08/04/2024',
    progress: 60,
    priority: 'P0'
  },
  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-01',
        end: '2024-08-01',
        progress: 90,
        priority: 'P0'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-30',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024.07.26',
        end: '2024.07.08',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07.24.2024',
        end: '08.04.2024',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-16',
        end: '2024-07-18',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-09',
        end: '2024-09-11',
        progress: 100,
        priority: 'P1'
      }
    ]
  },

  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 31,
    priority: 'P0'
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-26',
    end: '2024-07-28',
    progress: 60,
    priority: 'P0',
    children: [
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-26',
            end: '2024-07-28',
            progress: 60,
            priority: 'P0'
          },
          {
            id: 3,
            title: 'Determine project scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-29',
            end: '2024-07-31',
            progress: 100,
            priority: 'P1'
          }
        ]
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-06',
            end: '2024-07-08',
            progress: 60,
            priority: 'P0'
          },
          {
            id: 3,
            title: 'Determine project scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-29',
            end: '2024-07-31',
            progress: 100,
            priority: 'P1'
          }
        ]
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1',
        children: [
          {
            id: 1,
            title: 'Software Development',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-24',
            end: '2024-08-04',
            progress: 31,
            priority: 'P0'
          },
          {
            id: 2,
            title: 'Scope',
            developer: 'liufangfang.jane@bytedance.com',
            start: '2024-07-06',
            end: '2024-07-08',
            progress: 60,
            priority: 'P0'
          }
        ]
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      }
    ]
  },

  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-29',
    end: '2024-07-31',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-23',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-30',
        end: '2024-08-14',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 60,
        priority: 'P0'
      }
    ]
  },
  {
    id: 1,
    title: 'Software Development',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-24',
    end: '2024-08-04',
    progress: 31,
    priority: 'P0',
    children: [
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024/07/24',
        end: '2024/08/04',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-04',
        end: '2024-08-04',
        progress: 90,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07/24/2024',
        end: '08/04/2024',
        progress: 60,
        priority: 'P0'
      }
    ]
  },
  {
    id: 2,
    title: 'Scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-27',
    end: '2024-07-28',
    progress: 60,
    priority: 'P0'
  },
  {
    id: 3,
    title: 'Determine project scope',
    developer: 'liufangfang.jane@bytedance.com',
    start: '2024-07-29',
    end: '2024-07-31',
    progress: 100,
    priority: 'P1',
    children: [
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '07.24.2024',
        end: '08.04.2024',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-08-09',
        end: '2024-09-11',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      },
      {
        id: 1,
        title: 'Software Development',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-24',
        end: '2024-08-04',
        progress: 31,
        priority: 'P0'
      },
      {
        id: 2,
        title: 'Scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-26',
        end: '2024-07-28',
        progress: 60,
        priority: 'P0'
      },
      {
        id: 3,
        title: 'Determine project scope',
        developer: 'liufangfang.jane@bytedance.com',
        start: '2024-07-29',
        end: '2024-07-31',
        progress: 100,
        priority: 'P1'
      }
    ]
  }
];

const columns = [
  {
    field: 'title',
    title: 'title',
    width: 'auto',
    tree: true
  },
  {
    field: 'start',
    title: 'start',
    width: 'auto',
    editor: 'date-input'
  },
  {
    field: 'end',
    title: 'end',
    width: 'auto',
    editor: 'date-input'
  },
  {
    field: 'priority',
    title: 'priority',
    width: 'auto',
    editor: 'input'
  },
  {
    field: 'progress',
    title: 'progress',
    width: 'auto',
    headerStyle: {
      borderColor: '#e1e4e8'
    },
    style: {
      borderColor: '#e1e4e8',
      color: 'green'
    },
    editor: 'input'
  }
];
const option = {
  overscrollBehavior: 'none',
  records,
  taskListTable: {
    columns,
    tableWidth: 250,
    minTableWidth: 100,
    maxTableWidth: 600,
    theme: {
      headerStyle: {
        borderColor: '#e1e4e8',
        borderLineWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        bgColor: '#EEF1F5'
      },
      bodyStyle: {
        borderColor: '#e1e4e8',
        borderLineWidth: [1, 0, 1, 0],
        fontSize: 16,
        color: '#4D4D4D',
        bgColor: '#FFF'
      }
    }
    //rightFrozenColCount: 1
  },
  frame: {
    outerFrameStyle: {
      borderLineWidth: 2,
      borderColor: '#e1e4e8',
      cornerRadius: 8
    },
    verticalSplitLineMoveable: true,
    verticalSplitLine: {
      lineColor: '#e1e4e8',
      lineWidth: 3
    },
    horizontalSplitLine: {
      lineColor: '#e1e4e8',
      lineWidth: 3
    }
  },
  grid: {
    // backgroundColor: 'gray',
    verticalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    },
    horizontalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    }
  },
  headerRowHeight: 40,
  rowHeight: 40,
  taskBar: {
    startDateField: 'start',
    endDateField: 'end',
    progressField: 'progress',
    // resizable: false,
    moveable: true,
    hoverBarStyle: {
      barOverlayColor: 'rgba(99, 144, 0, 0.4)'
    },
    labelText: '{title} {progress}%',
    labelTextStyle: {
      // padding: 2,
      fontFamily: 'Arial',
      fontSize: 16,
      textAlign: 'left',
      textOverflow: 'ellipsis'
    },
    barStyle: {
      width: 20,
      /** 任务条的颜色 */
      barColor: '#ee8800',
      /** 已完成部分任务条的颜色 */
      completedBarColor: '#91e8e0',
      /** 任务条的圆角 */
      cornerRadius: 8,
      /** 任务条的边框 */
      borderWidth: 1,
      /** 边框颜色 */
      borderColor: 'black'
    },
    scheduleCreation: {
      buttonStyle: {
        backgroundColor: '#f7f7f5',
        lineColor: '#808080',
        lineWidth: 1,
        lineDash: [5, 5]
      }
    }
  },
  timelineHeader: {
    colWidth: 100,
    backgroundColor: '#EEF1F5',
    horizontalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    },
    verticalLine: {
      lineWidth: 1,
      lineColor: '#e1e4e8'
    },
    scales: [
      {
        unit: 'week',
        step: 1,
        startOfWeek: 'sunday',
        format(date) {
          return `Week ${date.dateIndex}`;
        },
        style: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          strokeColor: 'black',
          textAlign: 'right',
          textBaseline: 'bottom',
          backgroundColor: '#EEF1F5',
          textStick: true
          // padding: [0, 30, 0, 20]
        }
      },
      {
        unit: 'day',
        step: 1,
        format(date) {
          return date.dateIndex.toString();
        },
        style: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          strokeColor: 'black',
          textAlign: 'right',
          textBaseline: 'bottom',
          backgroundColor: '#EEF1F5'
        }
      }
    ]
  },
  markLine: [
    {
      date: '2024-07-28',
      style: {
        lineWidth: 1,
        lineColor: 'blue',
        lineDash: [8, 4]
      }
    },
    {
      date: '2024-08-17',
      style: {
        lineWidth: 2,
        lineColor: 'red',
        lineDash: [8, 4]
      }
    }
  ],
  rowSeriesNumber: {
    title: '行号',
    dragOrder: true,
    headerStyle: {
      bgColor: '#EEF1F5',
      borderColor: '#e1e4e8'
    },
    style: {
      borderColor: '#e1e4e8'
    }
  },
  scrollStyle: {
    scrollRailColor: 'RGBA(246,246,246,0.5)',
    visible: 'scrolling',
    width: 6,
    scrollSliderCornerRadius: 2,
    scrollSliderColor: '#5cb85c'
  }
};
ganttInstance = new VTableGantt.Gantt(document.getElementById(CONTAINER_ID), option);
window['ganttInstance'] = ganttInstance;
ganttInstance.on('click_task_bar', e => {
  console.log('click_task_bar', e);
});
ganttInstance.on('create_task_schedule', e => {
  console.log('create_task_schedule', e);
});
```