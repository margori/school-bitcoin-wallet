<?php

use yii\db\Migration;

/**
 * Class m220311_000330_add_wif_table
 */
class m220311_000330_add_wif_table extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%wif}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'wif' => $this->string()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ], $tableOptions);

        $this->addForeignKey('fk_wif_user', 'wif', 'user_id', 'user', 'id');
    }

    public function down()
    {
        $this->dropForeignKey('fk_wif_user', 'wif');
        $this->dropTable('{{%wif}}');
    }
}
