import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddAddRentalComponent extends Component {
    @service store
    @tracked image;
    @tracked category;
    @tracked viewOrHide = false;
    @tracked isEstate = true;

    uploadFile = (event) => {
        this.image = event.target.files[0];
    }

    val1 = () => {
        this.category = 'Estate';
    }

    val2 = () => {
        this.category = 'Condo';
    }

    openForm = () => {
        this.viewOrHide = true;
    }

    closeForm = () => {
        this.viewOrHide = false;
    }

    submitForm = () => {
        let self = this;
        if (self.title && self.ownerName && self.city && self.lat && self.lon && self.category && self.noOfBedrooms && self.image && self.desc) {
            const reader = new FileReader();
            if (this.image) {
                reader.readAsDataURL(this.image);
            }
            reader.onload = function() {
                self.store.push({
                    "data": [{
                        "type": "rental",
                        "id": self.title,
                        "attributes": {
                            "title": self.title,
                            "owner": self.ownerName,
                            "city": self.city,
                            "location": {
                                "lat": self.lat,
                                "lng": self.lon
                            },
                            "category": self.category,
                            "bedrooms": self.noOfBedrooms,
                            "image": reader.result,
                            "description": self.desc,
                            "favorite": true
                        }
                    }]
                })
            };
            this.viewOrHide = false;
        } else {
            window.alert("Please fill all the fields");
        }
    }

}