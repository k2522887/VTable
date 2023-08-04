/* eslint-disable */
import * as VTable from '../../src';
import VChart from '@visactor/vchart';
import { bindDebugTool } from '../../src/scenegraph/debug-tool';
const Table_CONTAINER_DOM_ID = 'vTable';
VTable.register.chartModule('vchart', VChart);
export function createTable() {
  fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/test-demo-data/pivot-chart-demo-3w.json')
    .then(res => res.json())
    .then(data => {
      const columns: (VTable.IDimension | string)[] = [
        {
          dimensionKey: '230417171050031',
          dimensionTitle: '国家',
          headerStyle: {
            color: 'red'
          }
        },
        '230717170834056',
        '230417171050028'
        // '230417170554008'
      ];
      const rows = [
        {
          dimensionKey: '230718152836009',
          dimensionTitle: '邮寄方式',
          headerStyle: {
            color: 'red',
            textStick: true
          }
        },
        '230718152836012'
      ];
      const indicators: VTable.TYPES.IIndicator[] = [
        {
          indicatorKey: '230713183656009',
          caption: '数量',
          width: 'auto',
          columnType: 'chart',
          chartModule: 'vchart',
          chartSpec: {
            // type: 'common',
            stack: true,
            type: 'bar',
            data: {
              id: 'data'
            },
            // brush: {
            //   brushType: 'rect',
            //   brushLinkSeriesIndex: [1, 2],
            //   inBrush: {
            //     colorAlpha: 1
            //   },
            //   outOfBrush: {
            //     colorAlpha: 0.2
            //   }
            // },
            xField: ['230417170554008'],
            yField: '230713183656009',
            seriesField: '230717170834024',
            axes: [
              { orient: 'left', visible: true, label: { visible: true } },
              { orient: 'bottom', visible: true }
            ],
            bar: {
              state: {
                selected: {
                  fill: 'yellow'
                },
                selected_reverse: {
                  // fill: '#ddd'
                  opacity: 0.2
                }
              }
            }
          },
          style: {
            padding: 1
          }
        },
        {
          indicatorKey: '230417171050025',
          caption: '销售额 & 利润',
          columnType: 'chart',
          chartModule: 'vchart',
          chartSpec: {
            type: 'common',
            data: {
              id: 'data'
            },

            series: [
              {
                type: 'bar',
                stack: true,
                xField: ['230417170554008'],
                yField: '230713152555009',
                seriesField: '230717170834024',
                bar: {
                  state: {
                    selected: {
                      fill: 'yellow'
                    },
                    selected_reverse: {
                      // fill: '#ddd'
                      opacity: 0.2
                    }
                  }
                }
              },
              {
                type: 'line',
                stack: false,
                xField: ['230417170554008'],
                yField: '230417171050025',
                seriesField: '230717170834024',
                line: {
                  state: {
                    selected: {
                      lineWidth: 3
                    },
                    selected_reverse: {
                      lineWidth: 1
                    }
                  }
                },
                point: {
                  state: {
                    selected: {
                      fill: 'yellow'
                    },
                    selected_reverse: {
                      fill: '#ddd'
                    }
                  }
                }
              }
            ],
            axes: [
              { orient: 'left', visible: true, label: { visible: true } },
              { orient: 'bottom', visible: true }
            ]
          },
          style: {
            padding: 1
          }
        },
        {
          indicatorKey: '230707112948009',
          caption: '折扣',
          width: 'auto',
          columnType: 'chart',
          chartModule: 'vchart',
          chartSpec: {
            // type: 'common',
            stack: false,
            type: 'area',
            data: {
              id: 'data'
            },
            xField: ['230417170554008'],
            yField: '230707112948009',
            seriesField: '230717170834024',
            axes: [
              { orient: 'left', visible: true, label: { visible: true } },
              { orient: 'bottom', visible: true }
            ],
            line: {
              state: {
                selected: {
                  lineWidth: 3
                },
                selected_reverse: {
                  lineWidth: 1
                }
              }
            },
            point: {
              state: {
                selected: {
                  fill: 'yellow'
                },
                selected_reverse: {
                  fill: '#ddd'
                }
              }
            },
            area: {
              state: {
                selected: {
                  opacity: 1
                },
                selected_reverse: {
                  opacity: 0.2
                }
              }
            }
          },
          style: {
            padding: 1
          }
        }
      ];
      const option: VTable.PivotTableConstructorOptions = {
        rows,
        columns,
        indicators,
        indicatorsAsCol: false,
        parentElement: document.getElementById(Table_CONTAINER_DOM_ID),
        records: data,
        defaultRowHeight: 200,
        defaultHeaderRowHeight: 50,
        defaultColWidth: 280,
        defaultHeaderColWidth: 100,
        indicatorTitle: '指标',
        corner: {
          titleOnDimension: 'row',
          headerStyle: {
            autoWrapText: true
          }
        },
        theme: VTable.themes.ARCO.extends({
          selectionStyle: {
            cellBgColor: ''
          }
        })
      };

      const tableInstance = new VTable.PivotChart(option);
      tableInstance.onVChartEvent('click', args => {
        console.log('listenChart click', args);
      });
      tableInstance.onVChartEvent('mouseover', args => {
        console.log('listenChart mouseover', args);
      });
      window.tableInstance = tableInstance;

      bindDebugTool(tableInstance.scenegraph.stage as any, {
        customGrapicKeys: ['role', '_updateTag']
      });
    });
}
