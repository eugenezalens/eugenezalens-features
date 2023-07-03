import { useCallback, useMemo } from 'react'
import _ from 'lodash'

import { useAppSelector } from '../../../../../../../app/hooks'
import { IComparisonTableCell as ICell, IComparisonTableColumn as IColumn } from '../../../models/data'
import { useComparisonTableContext as useContext } from '../../../context'

const _useComparisonTableGridsService = () => {
  const { builderId } = useContext()

  const columns = useAppSelector((state) => state.comparisonTables.columnsByBuilderId[builderId]) ?? {}

  const columnList = useMemo(() => {
    return _.sortBy(Object.values(columns), 'order')
  }, [columns])

  const createTemplateCell = (builderId: string, columnId: string, rowId: string): ICell => ({
    rowId,
    builderId,
    columnId,
    renderType: 'auto',
    autoRenderConfig: { preset: 'default', value: '—' },
  })

  const getFixedColumnsWidth = useCallback(() => {
    return columnList
      .reduce<string[]>((widthList, { isFixed, width }) => {
        if (isFixed) {
          widthList.push(width)
        }

        return widthList
      }, [])
      .join(' ')
  }, [columnList])

  const getColumnList = useCallback(
    (options?: { isOnlyFixed?: boolean }): IColumn[] => {
      return columnList.reduce<IColumn[]>((list, column) => {
        if (options?.isOnlyFixed && column.isFixed) {
          list.push(column)
        }

        if (!options?.isOnlyFixed && !column.isFixed) {
          list.push(column)
        }

        return list
      }, [])
    },
    [columnList]
  )

  const getColumnIdList = (
    builderId: string,
    options?: {
      isOnlyFixed?: boolean
    }
  ): string[] => {
    return columnList.reduce<string[]>((idList, { isFixed, id }) => {
      if (options?.isOnlyFixed && isFixed) {
        idList.push(id)
      }

      if (!options?.isOnlyFixed && !isFixed) {
        idList.push(id)
      }

      return idList
    }, [])
  }

  const getListFromCellOfColumn = (
    builderId: string,
    rowId: string,
    columnIdList: string[],
    cellList: ICell[]
  ): ICell[] => {
    return columnIdList.reduce<ICell[]>((acc, columnId) => {
      const foundCell = cellList.find((cell) => columnId === cell.columnId)

      if (foundCell) {
        acc.push(foundCell)
      } else {
        acc.push(createTemplateCell(builderId, columnId, rowId))
      }

      return acc
    }, [])
  }

  const getOrderedCellList = useCallback(
    (
      builderId: string,
      rowId: string
    ): {
      fixedCellList: ICell[]
      scrollableCellList: ICell[]
    } => {
      const cellList: ICell[] = []

      const [, ...fixedColumnIdList] = getColumnIdList(builderId, { isOnlyFixed: true })
      const scrollableColumnIdList = getColumnIdList(builderId)

      const fixedCellList = getListFromCellOfColumn(builderId, rowId, fixedColumnIdList, cellList)

      const scrollableCellList = getListFromCellOfColumn(builderId, rowId, scrollableColumnIdList, cellList)

      return {
        fixedCellList,
        scrollableCellList,
      }
    },
    []
  )

  return { getColumnList, getFixedColumnsWidth, getOrderedCellList }
}

export default _useComparisonTableGridsService
