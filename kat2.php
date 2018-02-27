<?PHP
class Cat {
    public $edge=0,$weight=1;
    public $name;
    
    function __construct( $name) {
        $this->name=$name;
    }
    function eat () {
        $this->weight=$this->weight+1;
        }
    function print() {
        echo "<pre>";
        print_r ($this); 
        echo "</pre>"; 
    }
    function run () {
        $this->weight --;
    }
}

$myrka = new Cat('Мурка');
$myrka->print();

for(;$myrka->weight<10;$myrka->eat())
{
    echo $myrka->weight;
}

//$myrka->eat();
$myrka->print();

$myrka->eat();
$myrka->print();

$barsik = new Cat('Барсик');
$barsik->print();

$myrka->run();
$myrka->print();

?>
