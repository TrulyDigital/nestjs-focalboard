import { Injectable } from "@nestjs/common";
import { BlocksDto } from "../src/domain/Blocks.dto";
import { BlocksEntity } from "../src/infraestructure/database/entities/Blocks.entity";
import { BlocksDbInterface } from "../src/infraestructure/database/interface/Blocks.db.interface";

@Injectable()
export class BlockDbServiceMockSpec implements BlocksDbInterface{

  async find_cards_by_some(dto: Partial<BlocksEntity>): Promise<BlocksDto[]> {
    if(dto.board_id === "1"){
      const resp = [
        {
          "id": "cib3to1qkcprt3rmwsd4r69eqza",
          "insert_at": new Date(),
          "parent_id": "bmdfeu1nj63ydxp6sahuxpm4nmh",
          "schema": "1",
          "type": "card",
          "title": "Pruebas_Unitarias",
          "fields": {
            "contentOrder": [],
            "icon": "",
            "isTemplate": false,
            "properties": {
                "a6bnsk396joyxgjga67ghqec9fw": "{\"from\":1725278400000}",
                "aai5txzznk1ur9ooimmamfu1ose": "a8k81nwj5qkcw6git4rkm6hemro",
                "aci77fbbaxdgn8sxmpwgd3ijidc": "u7hpxk68wnbgjifsomdaehnsgmr",
                "adc5qqri7rzxnqutk7g1cp414sc": "awwz4hcj5ceseamno7xrtcn8iar",
                "apy1hgiib4zgk6164r4rcwnaczr": "apajzyb5am13eyno6natm7uqkdo",
                "aty3iq47s67wwfsh75wwtoat7my": "acod9fcs183skzj3qae9bqjxqpy"
            }
          },
          "create_at": "1725742494103",
          "update_at": "1725742512251",
          "delete_at": "0",
          "root_id": null,
          "modified_by": "ui6wsk455jjdm8rnurnk1ktd11h",
          "channel_id": "",
          "created_by": "ui6wsk455jjdm8rnurnk1ktd11h",
          "board_id": "bmdfeu1nj63ydxp6sahuxpm4nmh"
        }
      ];
      return resp;
    }
  }

}