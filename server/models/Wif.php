<?php

namespace app\models;

use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * Class Wif
 * @package app\models
 * @property integer id
 * @property string user_id
 * @property string wif
 * @property integer created_at
 * @property integer updated_at
 */
class Wif extends ActiveRecord
{
  public function init()
  {
    parent::init();
  }

  /**
   * @inheritdoc
   */
  public static function tableName()
  {
    return '{{%wif}}';
  }

  /**
   * @inheritdoc
   */
  public function behaviors()
  {
    return [
      TimestampBehavior::class,
    ];
  }

  /**
   * @inheritdoc
   */
  public function rules()
  {
    return [
      [['user_id', 'wif'], 'required'],
    ];
  }
}
