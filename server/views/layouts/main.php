<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use app\widgets\Alert;
use yii\bootstrap4\Breadcrumbs;
use yii\bootstrap4\Html;
use yii\bootstrap4\Nav;
use yii\bootstrap4\NavBar;
use yii\helpers\Url;

AppAsset::register($this);

$bundlePath = Yii::getAlias('@webroot/bundle.js');
$bundleMD5 = md5_file($bundlePath);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">

<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <link rel="shortcut icon" href="<?= Url::base(true) ?>/favicon.ico" type="image/x-icon" />
    <script>
        window.defaults = {
            backendUrl: "<?= Url::base(true) ?>/",
            apiUrl: "<?= Url::base(true) ?>/api/"
        };
    </script>
    <script src="<?= Url::base(true) ?>/bundle.js?m=<?= $bundleMD5 ?>"></script>
    <?php $this->head() ?>
</head>

<body class="d-flex flex-column h-100">
    <?php $this->beginBody() ?>
    <?= $content ?>
    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>