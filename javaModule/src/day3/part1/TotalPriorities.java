package day3.part1;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class TotalPriorities {
    public static void main(String[] args) throws IOException {

        String data = new String(Files.readAllBytes(Paths.get("javaModule/src/day3/part1/input.txt")));
        String[] rucksacks = data.split("\n");

        int totalPriorities = 0;

        for (String rucksack : rucksacks) {
            int between = rucksack.length() / 2;

            String firstHalf = rucksack.substring(0, between);
            String secondHalf = rucksack.substring(between);

            char type = findCommonItem(firstHalf, secondHalf);
            int priority = findPriority(type);

            totalPriorities += priority;
        }

        System.out.println(totalPriorities);
    }

    private static char findCommonItem(String compartmentOne, String compartmentTwo) {
        for (char item : compartmentOne.toCharArray()) {
            if (compartmentTwo.contains(String.valueOf(item))) {
                return item;
            }
        }
        return '\0';
    }

    private static int findPriority(char type) {
        String itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return itemTypes.indexOf(type) + 1;
    }

}
