import consumablesList from './lists/consumablesList.js'
import equipmentsList from './lists/equipmentsList.js'
import piecesList from './lists/piecesList.js'
import fakesList from './lists/fakesList.js'
import equipmentsWeaponsList from './lists/equipmentsWeaponsList.js'
import equipmentsArmorsList from './lists/equipmentsArmorsList.js'

export default {
  consumables: consumablesList,
  equipments: [
    ...equipmentsList,
    ...equipmentsWeaponsList,
    ...equipmentsArmorsList,
  ],
  pieces: piecesList,
  fakes: fakesList,
}
