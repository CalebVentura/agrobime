import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { MegaMenu } from './MegaMenu'
import { useIntl } from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
      <MenuItem title='Estadísticas' to='/estadisticas' />

      <MenuInnerWithSub title='Aplicaciones' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuItem to='/apps/chat/private-chat' title='Contactar transportista' hasBullet={true} />
        <MenuItem to='/apps/chat/group-chat' title='Contactar especialista' hasBullet={true} />
      </MenuInnerWithSub>

    </>
  )
}
