import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class FavComponent extends Component {
  @service store;
  toChange = () => {
    this.store
      .findRecord('rental', this.args.rental.id.toString())
      .then(function (rental) {
        rental.favorite = !rental.favorite;
      });
  };
}
