<?php
namespace Model;

class Name{
    /**
     * Reading the Bengali Names from the JSON File
     *
     * @param string $select_type
     * @param integer $select_id
     * @param string $select_card_no
     * @return array
     */
    public static function read($select_type="all", $select_id=1, $select_card_no=""){
        try{
            $read_file = file_get_contents('names/names.json');
            $conversion = json_decode($read_file);
            if($select_type == 'all'):
                foreach($conversion as $key => $value):
                    $data[] = ["id" => $value->id, "card_no" => $value->card_no, "name" => $value->name];
                endforeach;
                if(empty($data)):
                    $data = array();
                endif;
                return $data;
            endif;
            if($select_type == 'id' && !empty($select_id) && !empty($select_card_no)):
                foreach($conversion as $key => $value):
                    if($select_id == $value->id && $select_card_no == $value->card_no):
                        $data[] = ["id" => $value->id, "card_no" => $value->card_no, "name" => $value->name];
                    endif;
                endforeach;
                if(empty($data)):
                    $data = array();
                endif;
                return $data;
            endif;
        }catch(Exception $e){
            echo "Error: {$e->message()}";
        }
    }

    /**
     * Create Bengali Name
     *
     * @param integer $id
     * @param string $card_no
     * @param string $name
     * @return void
     */
    public static function create($id, $card_no, $name){
        if(!empty($id) && !empty($card_no) && !empty($name)):
            if(self::read("id", $id, $card_no)):
                echo "This user already exists";
            else:
                $data = self::read('all');
                array_push($data, ["id" => $id, "card_no" => $card_no, "name" => $name]);
                try{
                    file_put_contents("names/names.json", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
                }catch(Exception $e){
                    echo "Error: {$e->message()}";
                }
            endif;
        endif;
    }
    
    /**
     * Update Bengali Name 
     *
     * @param integer $id
     * @param string $card_no
     * @param string $name
     * @return void
     */
    public static function updateName($id, $card_no, $name){
        if(self::read("id", $id, $card_no)):
            foreach(self::read("all") as $key => $value):
                if($id == $value['id'] && $card_no == $value['card_no']):
                    $data[] = ["id" => $value['id'], "card_no" => $value['card_no'], "name" => $name];
                else:
                    $data [] = $value;
                endif;
            endforeach;
            try{
                file_put_contents("names/names.json", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
            }catch(Exception $e){
                echo "Error: {$e->message()}";
            }
        else:
            echo "The user do not exists";
        endif;
    }
    
    /**
     * Update Card No
     *
     * @param int $id
     * @param string $card_no
     * @param string $name
     * @return void
     */
    public static function updateCardNo($id, $card_no, $name){
        foreach(self::read("all") as $key => $value):
            if($id == $value['id'] && $name == $value['name']):
                $data[] = ["id" => $value['id'], "card_no" => $card_no, "name" => $value['name']];
            else:
                $data [] = $value;
            endif;
        endforeach;
        try{
            file_put_contents("names/names.json", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        }catch(Exception $e){
            echo "Error: {$e->message()}";
        }
    }

    /**
     * Delete Bengali Name
     *
     * @param [type] $id
     * @param [type] $card_no
     * @return void
     */
    public static function delete($id, $card_no){
        if(!empty($id) && !empty($card_no)):
            foreach(self::read("all") as $key => $value):
                if($id == $value['id'] && $card_no == $value['card_no']):
                else:
                    $data[] = $value;
                endif;
            endforeach;
        endif;
        try{
            file_put_contents("names/names.json", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        }catch(Exception $e){
            echo "Error: {$e->message()}";
        }
    }
}


// header('Content-Type: application/json');

// Reading
// var_dump(Name::read('all'));
// var_dump(Name::read('id', "1", 'card-1'));

// Creating
// Name::create(3, "card-3", "মোহাম্মদ মইনুল হাসান হিমেল");

// Updating
// Name::updateName(3, "card-3", "মোহাম্মদ মইনুল হাসান হিমেল");
// Name::updateCardNo(3, "card-3", "মোহাম্মদ মইনুল হাসান হিমেল");

// Deleting
// Name::delete(2, 'card-2');
