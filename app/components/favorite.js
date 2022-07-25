import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class FavoriteComponent extends Component {
    @service store;

    get fav() {
        return this.args.rentals.filterBy('favorite');
    }
}