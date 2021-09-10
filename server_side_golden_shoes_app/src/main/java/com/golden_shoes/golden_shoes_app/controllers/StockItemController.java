package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import com.golden_shoes.golden_shoes_app.repositories.StockItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockItemController {

    @Autowired
    StockItemRepository stockItemRepository;

    @GetMapping(value = "/stock_items")
    public ResponseEntity<List<StockItem>> getAllStockItemsByParams() {
        return new ResponseEntity<>(stockItemRepository.findAll(), HttpStatus.OK);
    }
}