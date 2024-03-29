import { MigrationInterface, QueryRunner } from 'typeorm';

export class Core1698359444654 implements MigrationInterface {
  name = 'Core1698359444654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "core"."code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_3aab60cbcf5684b4a89fb46147e" UNIQUE ("code"), CONSTRAINT "PK_367e70f79a9106b8e802e1a9825" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."code_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, "isPrimary" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_26e48b5ff442e5a476363c7c289" UNIQUE ("code"), CONSTRAINT "PK_aee67663d3bf78ece882e953afd" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, "name" character varying, "image" character varying, "order" integer, CONSTRAINT "PK_2533602bd9247937e3a4861e173" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."data_translation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "language" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, "position" character varying, "content" jsonb NOT NULL DEFAULT '{}', "dataId" uuid NOT NULL, CONSTRAINT "PK_e48e7820fb4c959630441506fc3" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."data_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, "isPrimary" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e407b5b8f08191a39e15c0559eb" UNIQUE ("code"), CONSTRAINT "PK_d7dc4348c702c83c5ff959dfaac" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" integer NOT NULL, "url" character varying NOT NULL, "description" character varying, "data" character varying, "status" integer NOT NULL DEFAULT '0', "userId" character varying NOT NULL, CONSTRAINT "UQ_ff5d246bb5831ad7351f87e67cb" UNIQUE ("url"), CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."parameter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "vn" character varying, "en" character varying, CONSTRAINT "PK_cc5c047040f9c69f0e0d6a844a0" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, "thumbnailUrl" character varying, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."post_translation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "language" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, "slug" character varying, "content" jsonb NOT NULL DEFAULT '{}', "postId" uuid NOT NULL, CONSTRAINT "PK_0410fbb063b8214218be7639ea9" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "core"."post_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, "isPrimary" boolean NOT NULL DEFAULT false, "mpath" character varying DEFAULT '', "parent_id" uuid, CONSTRAINT "UQ_1564a516eb281b60ae54e01a36c" UNIQUE ("code"), CONSTRAINT "PK_fbd367b0f90f065f0e54f858a6a" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."address_province" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "UQ_858a97d2423118631af080793f1" UNIQUE ("code"), CONSTRAINT "PK_4f4f5db6965d8b7efcea357f330" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."address_district" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, "codeProvince" character varying NOT NULL, CONSTRAINT "UQ_7444cd6ee100f493b1463722b98" UNIQUE ("code"), CONSTRAINT "PK_64989ed42a39bc4b40d51d13e0e" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."address_ward" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "code" character varying NOT NULL, "codeDistrict" character varying NOT NULL, CONSTRAINT "UQ_3b11e3dd0964b66967ce5acdfd8" UNIQUE ("code"), CONSTRAINT "PK_e5ad8623648a0deb50ddf4e9550" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "codeProvince" character varying NOT NULL, "codeDistrict" character varying NOT NULL, "codeWard" character varying NOT NULL, "specificAddress" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "avatar" character varying, "password" character varying NOT NULL, "refreshToken" character varying, "otp" character varying, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "dob" TIMESTAMP NOT NULL, "description" character varying, "roleCode" character varying, "positionCode" character varying, "startDate" TIMESTAMP NOT NULL, "dateLeave" real, "dateOff" real DEFAULT '0', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user"."user_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" TIMESTAMP, "isDisabled" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "name" character varying NOT NULL, "isSystemAdmin" boolean NOT NULL DEFAULT false, "permissions" jsonb NOT NULL DEFAULT '[]', CONSTRAINT "UQ_00c232124015d4998bdc6036310" UNIQUE ("code"), CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "core"."code" ADD CONSTRAINT "FK_927209d9e3f6f87ace1a933c978" FOREIGN KEY ("type") REFERENCES "core"."code_type"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "core"."data" ADD CONSTRAINT "FK_5411ba018172ec73e64e74bf5b0" FOREIGN KEY ("type") REFERENCES "core"."data_type"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "core"."data_translation" ADD CONSTRAINT "FK_eae311ec0c99d120558506acd05" FOREIGN KEY ("dataId") REFERENCES "core"."data"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "core"."post" ADD CONSTRAINT "FK_b499447822de3f24ad355e19b8c" FOREIGN KEY ("type") REFERENCES "core"."post_type"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "core"."post_translation" ADD CONSTRAINT "FK_c3b205aea6eff06096f6f439240" FOREIGN KEY ("postId") REFERENCES "core"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "core"."post_type" ADD CONSTRAINT "FK_0e271348dc86606bcb78bb5baf0" FOREIGN KEY ("parent_id") REFERENCES "core"."post_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address_district" ADD CONSTRAINT "FK_d28b9ad190bbcb4728a225baebe" FOREIGN KEY ("codeProvince") REFERENCES "user"."address_province"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address_ward" ADD CONSTRAINT "FK_87744dd279eab2b47939da6e8c3" FOREIGN KEY ("codeDistrict") REFERENCES "user"."address_district"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address" ADD CONSTRAINT "FK_de67160900785eb9f9123b16e84" FOREIGN KEY ("codeProvince") REFERENCES "user"."address_province"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address" ADD CONSTRAINT "FK_cef5f32fbbfbe7d8d1fb6bbd7e0" FOREIGN KEY ("codeDistrict") REFERENCES "user"."address_district"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address" ADD CONSTRAINT "FK_33470d4bca4693d5f3facd88ee0" FOREIGN KEY ("codeWard") REFERENCES "user"."address_ward"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."user" ADD CONSTRAINT "FK_b823b9f2266b6a54de4e5b88294" FOREIGN KEY ("roleCode") REFERENCES "user"."user_role"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."user" ADD CONSTRAINT "FK_22188999bf0339b3fb2ff462aeb" FOREIGN KEY ("positionCode") REFERENCES "core"."code"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user"."user" DROP CONSTRAINT "FK_22188999bf0339b3fb2ff462aeb"`);
    await queryRunner.query(`ALTER TABLE "user"."user" DROP CONSTRAINT "FK_b823b9f2266b6a54de4e5b88294"`);
    await queryRunner.query(`ALTER TABLE "user"."address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
    await queryRunner.query(`ALTER TABLE "user"."address" DROP CONSTRAINT "FK_33470d4bca4693d5f3facd88ee0"`);
    await queryRunner.query(`ALTER TABLE "user"."address" DROP CONSTRAINT "FK_cef5f32fbbfbe7d8d1fb6bbd7e0"`);
    await queryRunner.query(`ALTER TABLE "user"."address" DROP CONSTRAINT "FK_de67160900785eb9f9123b16e84"`);
    await queryRunner.query(`ALTER TABLE "user"."address_ward" DROP CONSTRAINT "FK_87744dd279eab2b47939da6e8c3"`);
    await queryRunner.query(`ALTER TABLE "user"."address_district" DROP CONSTRAINT "FK_d28b9ad190bbcb4728a225baebe"`);
    await queryRunner.query(`ALTER TABLE "core"."post_type" DROP CONSTRAINT "FK_0e271348dc86606bcb78bb5baf0"`);
    await queryRunner.query(`ALTER TABLE "core"."post_translation" DROP CONSTRAINT "FK_c3b205aea6eff06096f6f439240"`);
    await queryRunner.query(`ALTER TABLE "core"."post" DROP CONSTRAINT "FK_b499447822de3f24ad355e19b8c"`);
    await queryRunner.query(`ALTER TABLE "core"."data_translation" DROP CONSTRAINT "FK_eae311ec0c99d120558506acd05"`);
    await queryRunner.query(`ALTER TABLE "core"."data" DROP CONSTRAINT "FK_5411ba018172ec73e64e74bf5b0"`);
    await queryRunner.query(`ALTER TABLE "core"."code" DROP CONSTRAINT "FK_927209d9e3f6f87ace1a933c978"`);
    await queryRunner.query(`DROP TABLE "user"."user_role"`);
    await queryRunner.query(`DROP TABLE "user"."user"`);
    await queryRunner.query(`DROP TABLE "user"."address"`);
    await queryRunner.query(`DROP TABLE "user"."address_ward"`);
    await queryRunner.query(`DROP TABLE "user"."address_district"`);
    await queryRunner.query(`DROP TABLE "user"."address_province"`);
    await queryRunner.query(`DROP TABLE "core"."post_type"`);
    await queryRunner.query(`DROP TABLE "core"."post_translation"`);
    await queryRunner.query(`DROP TABLE "core"."post"`);
    await queryRunner.query(`DROP TABLE "core"."parameter"`);
    await queryRunner.query(`DROP TABLE "core"."file"`);
    await queryRunner.query(`DROP TABLE "core"."data_type"`);
    await queryRunner.query(`DROP TABLE "core"."data_translation"`);
    await queryRunner.query(`DROP TABLE "core"."data"`);
    await queryRunner.query(`DROP TABLE "core"."code_type"`);
    await queryRunner.query(`DROP TABLE "core"."code"`);
  }
}
